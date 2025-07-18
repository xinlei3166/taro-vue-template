import Taro from '@tarojs/taro'

export function typeOf(obj: any) {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  // @ts-ignore
  return map[toString.call(obj)]
}

export function validateFields(form: Record<string, any>, messages: Record<string, any>) {
  for (const [k, v] of Object.entries(form)) {
    if (!v) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      messages[k] && Taro.showToast({ title: messages[k] })
      return
    }
  }
  return true
}

export function validateSelectedRowKeys(arr: Array<any>, msg = '请选择一条数据') {
  if (!arr.length) {
    Taro.showToast({ title: msg })
    return
  }
  return true
}

export function validateSelectedRowKeysWithRowCount(
  arr: Array<any>,
  rowCount = 1,
  msg1 = '请选择一条数据',
  msg2 = '只能同时编辑一条数据'
) {
  if (!arr.length) {
    Taro.showToast({ title: msg1 })
    return
  }
  if (rowCount && arr.length > rowCount) {
    Taro.showToast({ title: msg2 })
    return
  }
  return true
}
