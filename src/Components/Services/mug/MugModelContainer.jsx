import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { MugModel } from './MugModel'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'

const MugModelContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="forest" intensity={0.5}>
                    <MugModel scale={0.3} position={[0, -0.4, 0]} />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
                <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
            </Suspense>
        </Canvas>
    )
}

export default MugModelContainer