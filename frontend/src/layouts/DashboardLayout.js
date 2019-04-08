import React, { Fragment } from 'react';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import { Icon } from 'antd';
import DocumentTitle from 'react-document-title';
import { GlobalFooter } from 'ant-design-pro';
import SelectLang from '@/components/SelectLang';
import styles from './DashboardLayout.less';
import logo from '../assets/logo.svg';

const links = [
  {
    key: 'help',
    title: formatMessage({ id: 'layout.user.link.help' }),
    href: '',
  },
  {
    key: 'privacy',
    title: formatMessage({ id: 'layout.user.link.privacy' }),
    href: '',
  },
  {
    key: 'terms',
    title: formatMessage({ id: 'layout.user.link.terms' }),
    href: '',
  },
];

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2019 二月实验室出品
  </Fragment>
);

class DashboardLayout extends React.PureComponent {
  getPageTitle() {
      //const { routerData, location } = this.props;
      //const { pathname } = location;
      let title = 'Narnia - 自动化运维系统';
      //if (routerData[pathname] && routerData[pathname].name) {
      //  title = `${routerData[pathname].name} - Ant Design Pro`;
      //}
      return title;
  }

  render() {
    const { children } = this.props;
    return (
      <DocumentTitle title={this.getPageTitle()}>
      <div className={styles.container}>
        <div className={styles.lang}>
          <SelectLang />
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>Narnia</span>
              </Link>
            </div>
            <div className={styles.desc}>Narnia 是依循 ITIL 和 AIOps 的最佳实践之一</div>
          </div>
          {children}
        </div>
        <GlobalFooter links={links} copyright={copyright} />
      </div>
      </DocumentTitle>
    );
  }
}

export default DashboardLayout;
