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
} from 'antd';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Result from '@/components/Result';

import styles from './BasicList.less';

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const SelectOption = Select.Option;
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
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => {
    this.setState({ fileList });
    this.props.onChange({ fileList });

    // const imgsHash = fileList
    //   .filter(file => {
    //     if (file.response) {
    //       return file
    //     }
    //   })

    // console.log('imgsHash===>', imgsHash)

    // if (imgsHash.length > 0 && !_.isEmpty(good)) {
    //   dispatch({
    //     type: 'imgManager/saveImgsHash',
    //     payload: {
    //       imgsHash
    //     }
    //   }).then(res => {
    //     const { result } = res
    //     dispatch({
    //       type: 'goods/update',
    //       payload: {
    //         id: good._id,
    //         data: {
    //           imgs: result.map(img => img._id)
    //         }
    //       }
    //     })
    //   })
    // }
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
          action="http://up.qiniu.com"
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
  state = { visible: false, operation: 'edit', done: false };

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
      current: undefined,
    });
  };

  showEditModal = (item, operation) => {
    this.setState({
      visible: true,
      current: item,
      operation,
    });
  };

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

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    const { operation, current } = this.state;
    console.log('operation====>', operation, current);

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
    const { visible, operation, done, current = {} } = this.state;

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
          <span>手机名称</span>
          <p>{name}</p>
        </div>
        <div className={styles.listContentItem}>
          <span>创建时间</span>
          <p>{moment(created).format('YYYY-MM-DD HH:mm')}</p>
        </div>
        <div className={styles.listContentItem}>
          <span>状态</span>
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
          <FormItem label="手机名称" {...this.formLayout}>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入手机名称' }],
              initialValue: current.name,
            })(<Input placeholder="请输入手机名称" />)}
          </FormItem>
          <FormItem label="描述" {...this.formLayout}>
            {getFieldDecorator('desc', {
              rules: [{ required: true, message: '请输入描述' }],
              initialValue: current.desc,
            })(<TextArea rows={4} placeholder="请输入描述" />)}
          </FormItem>
          <FormItem label="原价" {...this.formLayout}>
            {getFieldDecorator('originPrice', {
              rules: [{ required: true, message: '请输入原价' }],
              initialValue: current.originPrice,
            })(<InputNumber min={1} placeholder="请输入原价" />)}
          </FormItem>
          <FormItem label="现价" {...this.formLayout}>
            {getFieldDecorator('purchasePrice', {
              rules: [{ required: true, message: '请输入现价' }],
              initialValue: current.purchasePrice,
            })(<InputNumber min={1} placeholder="请输入现价" />)}
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
            })(<PicturesWall good={current} token={token} domain={domain} />)}
          </FormItem>
        </Form>
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
                </List.Item>
              )}
            />
          </Card>
        </div>
        <Modal
          title={done ? null : `手机${current.id ? '编辑' : '添加'}`}
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
      </PageHeaderWrapper>
    );
  }
}

export default BasicList;
