import React, { useRef } from 'react'

const StreamingComponent = () => {
    const refVideo = useRef(document.createElement('video'))
    const start = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        })
        refVideo.current.srcObject = stream
    }
    const stop = () => { refVideo.current.srcObject = null }
    return (
        <div>
            <div className="flex justify-center items-center space-x-2">
                <button className="px-3 py-1 bg-indigo-700 rounded-lg text-white" onClick={start}>Play</button>
                <button className="px-3 py-1 bg-red-400 rounded-lg text-white" onClick={stop}>Stop</button>
            </div>
            <video ref={refVideo} autoPlay></video>
        </div>
    )
}

export default StreamingComponent