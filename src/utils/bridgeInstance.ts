import type { BNWorkspaceBridge } from './bnWorkspaceBridge'

let bridgeInstance: BNWorkspaceBridge | null = null

export function setBridgeInstance(instance: BNWorkspaceBridge) {
  bridgeInstance = instance
}

export function getBridgeInstance() {
  return bridgeInstance
}

export function clearBridgeInstance() {
  if (bridgeInstance?.onMessage) {
    bridgeInstance.onMessage = undefined
  }
  bridgeInstance = null
}
