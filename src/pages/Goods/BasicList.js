import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import moment from 'moment';
import { connect } from 'dva';
import _ from 'lodash';
import {
  List,
  Card,
  Row,
  Col,
  Radio,
  Input,
  InputNumber,
  Progress,
  Button,
  Icon,
  Dropdown,
  Menu,
  Avatar,
  Modal,
  Form,
  DatePicker,
  Select,
  Upload,
  message,
  Divider,
} from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Result from '@/components/Result';

import styles from './BasicList.less';

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const { Search, TextArea } = Input;

@connect(({ goods, imgManager }) => ({
  goods,
  imgManager,
}))
class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: !_.isEmpty(this.props.good.imgs) ? [...this.props.good.imgs] : [],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    console.log('preview====>', file)
    this.setState({
      previewFile: file,
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  setCoverImg = () => {
    this.props.setCoverImg(this.state.previewFile)
  }

  handleChange = ({ fileList }) => {
    this.setState({ fileList });
    this.props.onChange({ fileList });
  };

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const { good, token, domain } = this.props;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          // action="http://up-z1.qiniu.com"
          action="http://up-z0.qiniu.com"
          data={{ token }}
          listType="picture-card"
          fileList={fileList}
          multiple={true}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
          <Button onClick={() => this.setCoverImg()}>设置为封面图</Button>
        </Modal>
      </div>
    );
  }
}

@connect(({ goods, token, loading }) => ({
  goods,
  token,
  loading: loading.models.goods,
}))
@Form.create()
class BasicList extends Component {
  state = { visible: false, operation: 'edit', done: false, showProperties: false };

  formLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 15 },
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'goods/fetch',
    });

    dispatch({
      type: 'token/getQiniuToken',
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
      operation: 'create',
      current: { type: 'Phone', properties: {} },
    });
  };

  showEditModal = (item, operation) => {
    this.setState({
      visible: true,
      current: item,
      operation,
    });
  };

  handleSelectType = (value) => {
    console.log('value: ', value);
    const { current } = this.state
    current.type = value
    this.setState({
      showProperties: value === 'Phone' ? true : false,
      current
    })
  }

  handleDone = () => {
    setTimeout(() => this.addBtn.blur(), 0);
    this.setState({
      done: false,
      visible: false,
    });
  };

  handleCancel = () => {
    setTimeout(() => this.addBtn.blur(), 0);
    this.setState({
      visible: false,
    });
  };

  setCoverImg = (file) => {
    console.log('setCoverImg  file: ', file);
    const { current } = this.state
    if (file.response) {
      current.coverImg = `http://${this.props.token.qiniuConfig.domain}/${file.response.hash}`
    } else {
      current.coverImg = file.url
    }
    this.setState({
      current
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    const { operation, current } = this.state;

    setTimeout(() => this.addBtn.blur(), 0);
    form.validateFields((err, fieldsValue) => {
      console.log('fieldsValue++++', fieldsValue);
      if (err) return;

      if (operation === 'create') {
        dispatch({
          type: 'goods/create',
          payload: fieldsValue,
        }).then(res => {
          const { status, message, result } = res;
          if (status === 201) {
            this.setState({
              done: true,
            });
            dispatch({
              type: 'goods/fetch',
            });
            message.success(message);
          } else {
            message.error(message);
          }
        });
      } else {
        dispatch({
          type: 'goods/update',
          payload: {
            id: current._id,
            data: fieldsValue,
          },
        }).then(res => {
          const { status, message, result } = res;
          if (status === 201) {
            this.setState({
              done: true,
            });
            dispatch({
              type: 'goods/fetch',
            });
            message.success(message);
          } else {
            message.error(message);
          }
        });
      }
    });
  };

  deleteItem = id => {
    const { dispatch } = this.props;
    dispatch({
      type: 'goods/delete',
      payload: { id },
    }).then(res => {
      const { status, message } = res;
      if (status === 200) {
        message.success('删除成功！');
        dispatch({
          type: 'goods/fetch',
        });
      } else {
        message.error(message);
      }
    });
  };

  render() {
    const {
      goods: {
        data: { list, pagination },
      },
      token: {
        qiniuConfig: { token, domain },
      },
      loading,
    } = this.props;

    const {
      form: { getFieldDecorator },
    } = this.props;
    const { visible, operation, done, current = { properties: {} }, showProperties } = this.state;
    console.log('current: ', current);

    const editAndDelete = (key, currentItem) => {
      console.log('edit current item: ', currentItem);
      this.setState({ operation: key });
      if (key === 'edit') {
        this.showEditModal(currentItem);
      } else if (key === 'delete') {
        Modal.confirm({
          title: '删除手机',
          content: '确定删除该手机吗？',
          okText: '确认',
          cancelText: '取消',
          onOk: () => this.deleteItem(currentItem._id),
        });
      }
    };

    const modalFooter = done
      ? { footer: null, onCancel: this.handleDone }
      : { okText: '保存', onOk: this.handleSubmit, onCancel: this.handleCancel };

    const Info = ({ title, value, bordered }) => (
      <div className={styles.headerInfo}>
        <span>{title}</span>
        <p>{value}</p>
        {bordered && <em />}
      </div>
    );

    const extraContent = (
      <div className={styles.extraContent}>
        <RadioGroup defaultValue="all">
          <RadioButton value="WILLSHELVES">即将上架</RadioButton>
          <RadioButton value="ONSHELVES">正在销售</RadioButton>
          <RadioButton value="OBTAINED">下架</RadioButton>
        </RadioGroup>
        <Search className={styles.extraContentSearch} placeholder="请输入" onSearch={() => ({})} />
      </div>
    );

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: 5,
      total: 50,
    };

    const ListDetail = ({ data: { coverImg, name, created, onShelve } }) => (
      <div className={styles.listContent}>
        <div className={styles.listContentItem}>
          {/* <span>手机名称</span> */}
          <p>{name}</p>
        </div>
      </div>
    );
    const ListDetail1 = ({ data: { coverImg, name, created, onShelve } }) => (
      <div className={styles.listContent}>
        <div className={styles.listContentItem}>
          {/* <span>创建时间</span> */}
          <p>{moment(created).format('YYYY-MM-DD HH:mm')}</p>
        </div>
        <div className={styles.listContentItem}>
          {/* <span>状态</span> */}
          <p>{onShelve}</p>
        </div>
      </div>
    );

    const MoreBtn = props => (
      <Dropdown
        overlay={
          <Menu onClick={({ key }) => editAndDelete(key, props.current)}>
            <Menu.Item key="edit">编辑</Menu.Item>
            <Menu.Item key="delete">删除</Menu.Item>
          </Menu>
        }
      >
        <a>
          更多 <Icon type="down" />
        </a>
      </Dropdown>
    );


    const getModalContent = () => {
      if (done) {
        return (
          <Result
            type="success"
            title={operation === 'create' ? '创建成功' : '更新成功'}
            description={operation === 'create' ? '创建手机成功' : '更新手机成功'}
            actions={
              <Button type="primary" onClick={this.handleDone}>
                知道了
              </Button>
            }
            className={styles.formResult}
          />
        );
      }
      return (
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="商品类型" {...this.formLayout}>
            {getFieldDecorator('type', {
              rules: [{ required: true, message: '请选择商品类型' }],
              initialValue: current.type || 'Phone',
              getValueFromEvent: e => {
                this.handleSelectType(e)
                return e
              }
            })(<Select style={{ width: '100%' }}>
              <Option value="Phone">手机</Option>
              <Option value="Watch">手表</Option>
              <Option value="Other">其他</Option>
            </Select>)}
          </FormItem>
          <FormItem label="标题" {...this.formLayout}>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入标题' }],
              initialValue: current.name,
            })(<Input placeholder="请输入标题" />)}
          </FormItem>
          <FormItem label="描述" {...this.formLayout}>
            {getFieldDecorator('desc', {
              rules: [{ required: true, message: '请输入描述' }],
              initialValue: current.desc,
            })(<TextArea rows={4} placeholder="请输入描述" />)}
          </FormItem>
          <FormItem label="价格" {...this.formLayout}>
            {getFieldDecorator('originPrice', {
              rules: [{ required: true, message: '请输入价格' }],
              initialValue: current.originPrice,
            })(<InputNumber min={1} style={{ width: '100%' }} placeholder="请输入价格" />)}
          </FormItem>
          <FormItem label="邮递" {...this.formLayout}>
            {getFieldDecorator('post', {
              rules: [{ required: true, message: '请输入邮递' }],
              initialValue: current.post,
            })(<Select style={{ width: '100%' }}>
              <Option value="包邮">包邮</Option>
              <Option value="到付">到付</Option>
              <Option value="10">10</Option>
              <Option value="20">20</Option>
              <Option value="30">30</Option>
            </Select>)}
          </FormItem>
          {/* <FormItem label="现价" {...this.formLayout}>
            {getFieldDecorator('purchasePrice', {
              rules: [{ required: true, message: '请输入现价' }],
              initialValue: current.purchasePrice,
            })(<InputNumber min={1} style={{ width: '100%' }} placeholder="请输入现价" />)}
          </FormItem> */}
          <FormItem label="封面图" {...this.formLayout}>
            <img src={current.coverImg} style={{ display: 'inline-block', width: '80px', height: '80px', objectFit: 'contain' }} />
          </FormItem>

          <FormItem label="图片" {...this.formLayout}>
            {getFieldDecorator('imgs', {
              valuePropName: 'fileList',
              getValueFromEvent: e => {
                console.log('get value===>', e);
                if (!e || !e.fileList) {
                  return e;
                }

                const { fileList } = e;
                return fileList
                  .filter(file => {
                    if (!_.isEmpty(file.response)) {
                      return file;
                    }
                  })
                  .map(file => {
                    return {
                      uid: file.uid,
                      name: file.name,
                      url: `http://${domain}/${file.response.hash}`,
                    };
                  });
              },
            })(<PicturesWall good={current} token={token} domain={domain} setCoverImg={this.setCoverImg} />)}
          </FormItem>
          {
            current.type === 'Phone' &&
            <>
              <Divider>商品详情</Divider>
              <FormItem label="型号" {...this.formLayout}>
                {getFieldDecorator('properties.model', {
                  rules: [{ required: true, message: '请输入型号' }],
                  initialValue: current.properties.model,
                })(<Input style={{ width: '100%' }} placeholder="请输入型号" />)}
              </FormItem>
              <FormItem label="颜色" {...this.formLayout}>
                {getFieldDecorator('properties.color', {
                  rules: [{ required: true, message: '请输入颜色' }],
                  initialValue: current.properties.color,
                })(<Input style={{ width: '100%' }} placeholder="请输入颜色" />)}
              </FormItem>
              <FormItem label="容量" {...this.formLayout}>
                {getFieldDecorator('properties.capacity', {
                  rules: [{ required: true, message: '请输入容量' }],
                  initialValue: current.properties.capacity,
                })(<Select style={{ width: '100%' }}>
                  <Option value="16G">16G</Option>
                  <Option value="32G">32G</Option>
                  <Option value="64G">64G</Option>
                  <Option value="128G">128G</Option>
                  <Option value="256G">256G</Option>
                  <Option value="512G">512G</Option>
                  <Option value="其他">其他</Option>
                </Select>)}
              </FormItem>
              <FormItem label="发行版本" {...this.formLayout}>
                {getFieldDecorator('properties.release', {
                  rules: [{ required: true, message: '请输入发行版本' }],
                  initialValue: current.properties.release,
                })(<Select style={{ width: '100%' }}>
                  <Option value="国行">国行</Option>
                  <Option value="港行">港行</Option>
                  <Option value="美版">美版</Option>
                  <Option value="日版">日版</Option>
                  <Option value="欧版">欧版</Option>
                  <Option value="其他">其他</Option>
                </Select>)}
              </FormItem>
              <FormItem label="手机网络" {...this.formLayout}>
                {getFieldDecorator('properties.network', {
                  rules: [{ required: true, message: '请输入手机网络' }],
                  initialValue: current.properties.network,
                })(<Select style={{ width: '100%' }}>
                  <Option value="全网通">全网通</Option>
                  <Option value="单网">单网</Option>
                  <Option value="双网">双网</Option>
                </Select>)}
              </FormItem>
              <FormItem label="成色" {...this.formLayout}>
                {getFieldDecorator('properties.quality', {
                  rules: [{ required: true, message: '请输入成色' }],
                  initialValue: current.properties.quality,
                })(<Select style={{ width: '100%' }}>
                  <Option value="全新">全新</Option>
                  <Option value="95新">95新</Option>
                  <Option value="9成新">9成新</Option>
                  <Option value="其他">其他</Option>
                </Select>)}
              </FormItem>
              <FormItem label="保修" {...this.formLayout}>
                {getFieldDecorator('properties.warranty', {
                  rules: [{ required: true, message: '请输入保修' }],
                  initialValue: current.properties.warranty,
                })(<Select style={{ width: '100%' }}>
                  <Option value="保修剩余1个月及以上">保修剩余1个月及以上</Option>
                  <Option value="已过保">已过保</Option>
                </Select>)}
              </FormItem>
              <FormItem label="边框外壳" {...this.formLayout}>
                {getFieldDecorator('properties.borderShell', {
                  rules: [{ required: true, message: '请输入边框外壳' }],
                  initialValue: current.properties.borderShell,
                })(<Select style={{ width: '100%' }}>
                  <Option value="全新未使用">全新未使用</Option>
                  <Option value="很少使用无任何划痕">很少使用无任何划痕</Option>
                  <Option value="很少使用有轻微划痕">很少使用有轻微划痕</Option>
                  <Option value="经常使用有磕碰掉漆">经常使用有磕碰掉漆</Option>
                </Select>)}
              </FormItem>
              <FormItem label="屏幕" {...this.formLayout}>
                {getFieldDecorator('properties.screen', {
                  rules: [{ required: true, message: '请输入屏幕' }],
                  initialValue: current.properties.screen,
                })(<Select style={{ width: '100%' }}>
                  <Option value="全新无任何痕迹">全新无任何痕迹</Option>
                  <Option value="很少使用有轻微痕迹">很少使用有轻微痕迹</Option>
                  <Option value="经常使用有明显痕迹">经常使用有明显痕迹</Option>
                </Select>)}
              </FormItem>
              <FormItem label="维修拆机史" {...this.formLayout}>
                {getFieldDecorator('properties.maintainHistory', {
                  rules: [{ required: true, message: '请输入维修拆机史' }],
                  initialValue: current.properties.maintainHistory,
                })(<Select style={{ width: '100%' }}>
                  <Option value="无拆无修">无拆无修</Option>
                  <Option value="修过小部件">修过小部件</Option>
                  <Option value="修过主板或电池">修过主板或电池</Option>
                </Select>)}
              </FormItem>
              <FormItem label="账号密码" {...this.formLayout}>
                {getFieldDecorator('properties.account', {
                  rules: [{ required: true, message: '请输入账号密码' }],
                  initialValue: current.properties.account,
                })(<Select style={{ width: '100%' }}>
                  <Option value="账号可以解除">账号可以解除</Option>
                  <Option value="账号不能解除">账号不能解除</Option>
                </Select>)}
              </FormItem>
              <FormItem label="功能性问题" {...this.formLayout}>
                {getFieldDecorator('properties.funcProblem', {
                  rules: [{ required: true, message: '请输入功能性问题' }],
                  initialValue: current.properties.funcProblem,
                })(<Select style={{ width: '100%' }}>
                  <Option value="完好无功能性问题">完好无功能性问题</Option>
                  <Option value="通话不正常">通话不正常</Option>
                  <Option value="照相机不正常">照相机不正常</Option>
                  <Option value="蓝牙GPSWiFi不正常">蓝牙GPSWiFi不正常</Option>
                  <Option value="耳机听筒不正常">耳机听筒不正常</Option>
                </Select>)}
              </FormItem>
            </>
          }
        </Form >
      );
    };
    return (
      <PageHeaderWrapper>
        <div className={styles.standardList}>
          <Card
            className={styles.listCard}
            bordered={false}
            title="手机列表"
            style={{ marginTop: 24 }}
            bodyStyle={{ padding: '0 32px 40px 32px' }}
          // extra={extraContent}
          >
            <Button
              type="dashed"
              style={{ width: '100%', marginBottom: 8 }}
              icon="plus"
              onClick={this.showModal}
              ref={component => {
                /* eslint-disable */
                this.addBtn = findDOMNode(component);
                /* eslint-enable */
              }}
            >
              添加
            </Button>

            {/* <StandardTable
              selectedRows={selectedRows}
              loading={loading}
              data={data}
              columns={this.columns}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
            /> */}

            <List
              size="large"
              rowKey="id"
              loading={loading}
              // pagination={paginationProps}
              dataSource={list}
              renderItem={item => (
                <List.Item
                  actions={[
                    <a
                      onClick={e => {
                        e.preventDefault();
                        this.showEditModal(item, 'edit');
                      }}
                    >
                      编辑
                    </a>,
                    <MoreBtn current={item} />,
                  ]}
                >
                  <ListDetail data={item} />
                  <ListDetail1 data={item} />
                </List.Item>
              )}
            />
          </Card>
        </div>
        <Modal
          title={done ? null : `${current.id ? '编辑' : '添加'}商品`}
          className={styles.standardListForm}
          width={640}
          bodyStyle={done ? { padding: '72px 0' } : { padding: '28px 0 0' }}
          destroyOnClose
          operation={operation}
          visible={visible}
          {...modalFooter}
        >
          {getModalContent()}
        </Modal>
      </PageHeaderWrapper >
    );
  }
}

export default BasicList;
