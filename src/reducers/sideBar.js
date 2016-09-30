import { SELECT_MENU, EXPAND_MENU } from '../actionTypes'

const menus = {
	  overview: {
	    link: '/',
	    icon: 'appstore',
	    display: '概览'
	  },
	  dashboard: {
	    icon: 'mail',
	    display: '风险大盘',
	    submenu: {
	      riskTrend: {
	        link: '/test',
	        display: '风险趋势'
	      },
	      riskIndex: {
	        display: '风险指标',
	        submenu: {
	          indexReport: {
	            link: '/test2',
	            display: '指标报表'
	          },
	          deviceCapture: {
	          	link: '/testFile',
	            display: '文件上传'
	          },
	          deviceCapture2: {
	          	link: '/testFile2',
	            display: '文件上传2'
	          }
	        }
	      }
	    }
	  },
	  ruleengine: {
	    icon: 'setting',
	    display: '策略规则',
	    submenu: {
	      policyManager: {
	        display: '策略管理',
	        submenu: {
	          policySet: {
	            display: '策略集'
	          },
	          policySnapshot: {
	            display: '策略集快照'
	          },
	          policyTemplate: {
	            display: '策略模板'
	          },
	          policyTemplateSnapshot: {
	            display: '策略模板快照'
	          },
	          groupConfiguration: {
	            display: '分组配置'
	          },
	          groupConfigurationTemplate: {
	            display: '分组配置(模板)'
	          }
	        }
	      },
	      fieldConfiguration: {
	        display: '字段配置',
	        submenu: {
	          systemField: {
	            display: '系统字段'
	          },
	          extendField: {
	            display: '扩展字段'
	          },
	          dynamicField: {
	            display: '动态字段'
	          }
	        }
	      },
	      invokeManager: {
	        display: '调用管理',
	        submenu: {
	          invokeLog: {
	            display: '调用日志'
	          },
	          manualInvoke: {
	            display: '手工调用'
	          }
	        }
	      },
	      instructions: {
	        display: '说明文档',
	        submenu: {
	          riskDecision: {
	            display: '风险决策API'
	          },
	          openAPI: {
	            display: '开放API'
	          },
	          ruleConfiguration: {
	            display: '规则配置'
	          }
	        }
	      }
	    }
	  },
	  smartmap: {
	    icon: 'setting',
	    display: '智能图谱',
	    submenu: {
	      complexMap: {
	        display: '复杂网络'
	      },
	      deviceMap: {
	        display: '设备分析图谱'
	      },
	      accountMap: {
	        display: '账户分析图谱'
	      }
	    }
	  }
}

const INIT_STATE = {
  menus,
  selectedKey: 'riskTrend',
  openKey: []
};

export default function reducer(state = INIT_STATE, { type, payload }) {
  switch (type) {
    case SELECT_MENU:
    {
      return Object.assign({}, state, { selectedKey: payload});
    }
    case EXPAND_MENU:
    {
      return payload
    }
    default:
      return state;
  }
}
