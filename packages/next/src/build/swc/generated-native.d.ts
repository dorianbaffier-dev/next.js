// Manual additions to make the generated types below work.

import type { TurbopackResult } from './types'

export type TurboTasks = { readonly __tag: unique symbol }
export type ExternalEndpoint = { readonly __tag: unique symbol }
export type NextTurboTasks = { readonly __tag: unique symbol }
export type RefCell = { readonly __tag: unique symbol }
export type NapiRouteHas = {
  type: string
  key?: string
  value?: string
  readonly __tag: unique symbol
}

export function lightningCssTransform(args: object): Promise<unknown>
export function lightningCssTransformStyleAttribute(
  args: object
): Promise<unknown>

// GENERATED-TYPES-BELOW
// DO NOT MANUALLY EDIT THESE TYPES
// You can regenerate this file by running `pnpm swc-build-native` in the root of the repo.

/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export class ExternalObject<T> {
  readonly '': {
    readonly '': unique symbol
    [K: symbol]: T
  }
}
export interface TransformOutput {
  code: string
  map?: string
  output?: string
}
export function mdxCompile(
  value: string,
  option: Buffer,
  signal?: AbortSignal | undefined | null
): Promise<unknown>
export function mdxCompileSync(value: string, option: Buffer): string
export function minify(
  input: Buffer,
  opts: Buffer,
  signal?: AbortSignal | undefined | null
): Promise<TransformOutput>
export function minifySync(input: Buffer, opts: Buffer): TransformOutput
export interface NapiEndpointConfig {}
export interface NapiServerPath {
  path: string
  contentHash: string
}
export interface NapiWrittenEndpoint {
  type: string
  entryPath?: string
  clientPaths: Array<string>
  serverPaths: Array<NapiServerPath>
  config: NapiEndpointConfig
}
export function endpointWriteToDisk(endpoint: {
  __napiType: 'Endpoint'
}): Promise<TurbopackResult>
export function endpointServerChangedSubscribe(
  endpoint: { __napiType: 'Endpoint' },
  issues: boolean,
  func: (...args: any[]) => any
): { __napiType: 'RootTask' }
export function endpointClientChangedSubscribe(
  endpoint: { __napiType: 'Endpoint' },
  func: (...args: any[]) => any
): { __napiType: 'RootTask' }
export interface NapiEnvVar {
  name: string
  value: string
}
export interface NapiDraftModeOptions {
  previewModeId: string
  previewModeEncryptionKey: string
  previewModeSigningKey: string
}
export interface NapiWatchOptions {
  /** Whether to watch the filesystem for file changes. */
  enable: boolean
  /**
   * Enable polling at a certain interval if the native file watching doesn't work (e.g.
   * docker).
   */
  pollIntervalMs?: number
}
export interface NapiProjectOptions {
  /**
   * A root path from which all files must be nested under. Trying to access
   * a file outside this root will fail. Think of this as a chroot.
   */
  rootPath: string
  /** A path inside the root_path which contains the app/pages directories. */
  projectPath: string
  /**
   * next.config's distDir. Project initialization occurs eariler than
   * deserializing next.config, so passing it as separate option.
   */
  distDir: string
  /** Filesystem watcher options. */
  watch: NapiWatchOptions
  /** The contents of next.config.js, serialized to JSON. */
  nextConfig: string
  /** The contents of ts/config read by load-jsconfig, serialized to JSON. */
  jsConfig: string
  /** A map of environment variables to use when compiling code. */
  env: Array<NapiEnvVar>
  /**
   * A map of environment variables which should get injected at compile
   * time.
   */
  defineEnv: NapiDefineEnv
  /** The mode in which Next.js is running. */
  dev: boolean
  /** The server actions encryption key. */
  encryptionKey: string
  /** The build id. */
  buildId: string
  /** Options for draft mode. */
  previewProps: NapiDraftModeOptions
  /** The browserslist query to use for targeting browsers. */
  browserslistQuery: string
}
/** [NapiProjectOptions] with all fields optional. */
export interface NapiPartialProjectOptions {
  /**
   * A root path from which all files must be nested under. Trying to access
   * a file outside this root will fail. Think of this as a chroot.
   */
  rootPath?: string
  /** A path inside the root_path which contains the app/pages directories. */
  projectPath?: string
  /**
   * next.config's distDir. Project initialization occurs eariler than
   * deserializing next.config, so passing it as separate option.
   */
  distDir?: string | undefined | null
  /** Filesystem watcher options. */
  watch?: NapiWatchOptions
  /** The contents of next.config.js, serialized to JSON. */
  nextConfig?: string
  /** The contents of ts/config read by load-jsconfig, serialized to JSON. */
  jsConfig?: string
  /** A map of environment variables to use when compiling code. */
  env?: Array<NapiEnvVar>
  /**
   * A map of environment variables which should get injected at compile
   * time.
   */
  defineEnv?: NapiDefineEnv
  /** The mode in which Next.js is running. */
  dev?: boolean
  /** The server actions encryption key. */
  encryptionKey?: string
  /** The build id. */
  buildId?: string
  /** Options for draft mode. */
  previewProps?: NapiDraftModeOptions
  /** The browserslist query to use for targeting browsers. */
  browserslistQuery?: string
}
export interface NapiDefineEnv {
  client: Array<NapiEnvVar>
  edge: Array<NapiEnvVar>
  nodejs: Array<NapiEnvVar>
}
export interface NapiTurboEngineOptions {
  /** Use the new backend with persistent caching enabled. */
  persistentCaching?: boolean
  /** An upper bound of memory that turbopack will attempt to stay under. */
  memoryLimit?: number
}
export function projectNew(
  options: NapiProjectOptions,
  turboEngineOptions: NapiTurboEngineOptions
): Promise<{ __napiType: 'Project' }>
export function projectUpdate(
  project: { __napiType: 'Project' },
  options: NapiPartialProjectOptions
): Promise<void>
export function projectShutdown(project: {
  __napiType: 'Project'
}): Promise<void>
export interface AppPageNapiRoute {
  /** The relative path from project_path to the route file */
  originalName?: string
  htmlEndpoint?: ExternalObject<ExternalEndpoint>
  rscEndpoint?: ExternalObject<ExternalEndpoint>
}
export interface NapiRoute {
  /** The router path */
  pathname: string
  /** The relative path from project_path to the route file */
  originalName?: string
  /** The type of route, eg a Page or App */
  type: string
  pages?: Array<AppPageNapiRoute>
  endpoint?: ExternalObject<ExternalEndpoint>
  htmlEndpoint?: ExternalObject<ExternalEndpoint>
  rscEndpoint?: ExternalObject<ExternalEndpoint>
  dataEndpoint?: ExternalObject<ExternalEndpoint>
}
export interface NapiMiddleware {
  endpoint: ExternalObject<ExternalEndpoint>
}
export interface NapiInstrumentation {
  nodeJs: ExternalObject<ExternalEndpoint>
  edge: ExternalObject<ExternalEndpoint>
}
export interface NapiEntrypoints {
  routes: Array<NapiRoute>
  middleware?: NapiMiddleware
  instrumentation?: NapiInstrumentation
  pagesDocumentEndpoint: ExternalObject<ExternalEndpoint>
  pagesAppEndpoint: ExternalObject<ExternalEndpoint>
  pagesErrorEndpoint: ExternalObject<ExternalEndpoint>
}
export function projectEntrypointsSubscribe(
  project: { __napiType: 'Project' },
  func: (...args: any[]) => any
): { __napiType: 'RootTask' }
export function projectHmrEvents(
  project: { __napiType: 'Project' },
  identifier: string,
  func: (...args: any[]) => any
): { __napiType: 'RootTask' }
export interface HmrIdentifiers {
  identifiers: Array<string>
}
export function projectHmrIdentifiersSubscribe(
  project: { __napiType: 'Project' },
  func: (...args: any[]) => any
): { __napiType: 'RootTask' }
export interface NapiUpdateMessage {
  updateType: string
  value?: NapiUpdateInfo
}
export interface NapiUpdateInfo {
  duration: number
  tasks: number
}
/**
 * Subscribes to lifecycle events of the compilation.
 *
 * Emits an [UpdateMessage::Start] event when any computation starts.
 * Emits an [UpdateMessage::End] event when there was no computation for the
 * specified time (`aggregation_ms`). The [UpdateMessage::End] event contains
 * information about the computations that happened since the
 * [UpdateMessage::Start] event. It contains the duration of the computation
 * (excluding the idle time that was spend waiting for `aggregation_ms`), and
 * the number of tasks that were executed.
 *
 * The signature of the `func` is `(update_message: UpdateMessage) => void`.
 */
export function projectUpdateInfoSubscribe(
  project: { __napiType: 'Project' },
  aggregationMs: number,
  func: (...args: any[]) => any
): void
export interface StackFrame {
  isServer: boolean
  isInternal?: boolean
  file: string
  line?: number
  column?: number
  methodName?: string
}
export function projectTraceSource(
  project: { __napiType: 'Project' },
  frame: StackFrame
): Promise<StackFrame | null>
export function projectGetSourceForAsset(
  project: { __napiType: 'Project' },
  filePath: string
): Promise<string | null>
export function projectGetSourceMap(
  project: { __napiType: 'Project' },
  filePath: string
): Promise<string | null>
/** Runs exit handlers for the project registered using the [`ExitHandler`] API. */
export function projectOnExit(project: { __napiType: 'Project' }): Promise<void>
export function rootTaskDispose(rootTask: { __napiType: 'RootTask' }): void
export interface NapiIssue {
  severity: string
  stage: string
  filePath: string
  title: any
  description?: any
  detail?: any
  source?: NapiIssueSource
  documentationLink: string
  subIssues: Array<NapiIssue>
}
export interface NapiIssueSource {
  source: NapiSource
  range?: NapiIssueSourceRange
}
export interface NapiIssueSourceRange {
  start: NapiSourcePos
  end: NapiSourcePos
}
export interface NapiSource {
  ident: string
  content?: string
}
export interface NapiSourcePos {
  line: number
  column: number
}
export interface NapiDiagnostic {
  category: string
  name: string
  payload: Record<string, string>
}
export function parse(
  src: string,
  options: Buffer,
  filename?: string | undefined | null,
  signal?: AbortSignal | undefined | null
): Promise<string>
export function transform(
  src: string | Buffer | undefined,
  isModule: boolean,
  options: Buffer,
  signal?: AbortSignal | undefined | null
): Promise<unknown>
export function transformSync(
  src: string | Buffer | undefined,
  isModule: boolean,
  options: Buffer
): object
export function startTurbopackTraceServer(path: string): void
export interface NextBuildContext {
  /** The root directory of the workspace. */
  root?: string
  /** The project's directory. */
  dir?: string
  /**
   * next.config.js's distDir. Current there's some early stage setup
   * requires this Before construct a context to read next.config.js,
   * which we passes separately here.
   */
  distDir?: string
  /** The build ID. */
  buildId?: string
  /** The rewrites, as computed by Next.js. */
  rewrites?: NapiRewrites
  defineEnv: NapiDefineEnv
}
/** Keep in sync with [`next_core::next_config::Rewrites`] */
export interface NapiRewrites {
  fallback: Array<NapiRewrite>
  afterFiles: Array<NapiRewrite>
  beforeFiles: Array<NapiRewrite>
}
/** Keep in sync with [`next_core::next_config::Rewrite`] */
export interface NapiRewrite {
  source: string
  destination: string
  basePath?: boolean
  locale?: boolean
  has?: Array<NapiRouteHas>
  missing?: Array<NapiRouteHas>
}
export function createTurboTasks(
  outputPath: string,
  persistentCaching: boolean,
  memoryLimit?: number | undefined | null
): ExternalObject<NextTurboTasks>
export function runTurboTracing(
  options: Buffer,
  turboTasks: ExternalObject<NextTurboTasks>
): Promise<Array<string>>
export function getTargetTriple(): string
export function initHeapProfiler(): ExternalObject<RefCell>
export function teardownHeapProfiler(
  guardExternal: ExternalObject<RefCell>
): void
/**
 * Initialize tracing subscriber to emit traces. This configures subscribers
 * for Trace Event Format <https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU/preview>.
 */
export function initCustomTraceSubscriber(
  traceOutFilePath?: string | undefined | null
): ExternalObject<RefCell>
/**
 * Teardown currently running tracing subscriber to flush out remaining traces.
 * This should be called when parent node.js process exits, otherwise generated
 * trace may drop traces in the buffer.
 */
export function teardownTraceSubscriber(
  guardExternal: ExternalObject<RefCell>
): void
