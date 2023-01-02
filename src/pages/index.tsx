import React from 'react'
import { Button } from '@mui/material'

import ProTip from '~/components/ProTip'
import RemoteControl from '~/components/RemoteControl'

import AirConditioner from '~/components/ac/AirConditioner'
import Toast from '~/components/Toast'

import { useDetectStorage } from '~/hooks'
import { useAcCtx } from '~/context'

/**
 * 主页
 * @returns
 */
const Home: React.FC = () => {
  const { state: ac } = useAcCtx()

  useDetectStorage()

  const audio1 = new Audio('/assets/audio/shuo.mp3');
  const audio2 = new Audio('/assets/audio/xindong.mp3');

  /**
   * 根据模式返回对应的色温
   * @returns
   */
  function getClassByMode() {
    if (ac.status)
      return ac.mode === 'hot' ? 'hot-color' : 'cold-color'
    else
      return ''
  }

  return (
    <div className={`max-w-600px m-auto ${getClassByMode()}`}>
      <div className="pt-6">
        <h1 className="text-center text-3xl">
          红贵人的寝宫
        </h1>
        <ProTip />
        <AirConditioner
          status={ac.status}
          temperature={ac.temperature}
          mode={ac.mode}
        />
        <div className="text-center">
          <div className="mt-2">
            <Button
              variant="outlined"
              onClick={() => {
                audio1.play();
                audio2.play();
              }}
            >
              听小黄鸡唱歌
            </Button>
          </div>
        </div>
        <RemoteControl />
      </div>

      <Toast />
    </div>
  )
}

export default Home
