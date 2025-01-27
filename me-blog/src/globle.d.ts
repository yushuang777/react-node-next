/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PaginationOption {
    pageNo: number
    pageSize: number
    totalCount: number
  }
  
  export interface ResponseData<T> {
    code: string
    data: T
    msg: string
  }
  
  export type PromiseResponseData<T> = Promise<ResponseData<T>>
  
  /**
   * 带分页参数的返回值
   */
  export interface PagiResponseData<T> {
    code: string
    data: {
      content: T
      pageNo: number
      pageSize: number
      totalCount: number
      totalPages: number
    }
    msg: string
  }
  
  export type PagiPromiseResponseData<T> = Promise<PagiResponseData<T>>
  
  type ExcludeFunctions<T> = Omit<
    T,
    {
      // eslint-disable-next-line @typescript-eslint/ban-types
      [K in keyof T]: T[K] extends Function ? K : never
    }[keyof T]
  >
  
  // 将部分属性变为可选属性
  type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
  
  declare global {
  
    type SetOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
    // ###################################################
    // reducer相关类型
  
    // 获取单个key的actionkey
    type CustomActionType<KEY> = `set${Capitalize<KEY>}Action`
  
    type CustomActionTypes<STATE> =
      | CustomActionType<keyof STATE>
      | 'resetStateAction'
  
    // 获取单个key的action
    type CustomAction<KEY, STATE> = {
      type: CustomActionType<KEY>
      payload: STATE[KEY]
    }
  
    // 传入ACTION_KEY和STATE，提取Action
    type CustomActionFromKeyState<ACTION_KEY, STATE> = {
      type: ACTION_KEY
      payload: STATE[ExtractActionKey<ACTION_KEY>] extends never
        ? undefined
        : STATE[ExtractActionKey<ACTION_KEY>]
    }
    type CustomActions<STATE> = {
      type: CustomActionTypes<STATE>
      payload: any
    }
    type TypeOfProperties<T> = {
      [K in keyof T]: T[K]
    }
    // 从action字符串中提取State的key
    type ExtractActionKey<T extends string> = T extends `set${infer KEY}Action`
      ? Uncapitalize<KEY>
      : never
    type ActionFunctions<T> = {
      [x in CustomActionTypes<T>]: (
        val: T[ExtractActionKey<x>],
      ) => CustomActionFromKeyState<x, T>
    }
  
    interface ModalOptions {
      open: boolean
      confirmLoading: boolean
    }
  
    interface PaginationParam {
      pageNo: number
      pageSize: number
    }
  
    type ExcludePagination<PARAM> = Omit<PARAM, 'pageNo' | 'pageSize'>
  
    // 配置权限权限
    type PermissionKey =
      // 目标拜访量相关
      | 'targetVisitManageView'
      | 'targetVisitAudit'
      | 'targetVisitManagementAdd'
      // 跟进列表导出报表
      | 'reportExport'
  }
  