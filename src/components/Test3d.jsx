import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Test3d = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* “Canvas needs to make a container where animations can work.” */}
      <Canvas>
        <mesh>
          {/* “first arg the radius, so 1 is like 100%, 100 is how wide, and third one how long” */}
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              /* 
            color — цвет.
            attach="material" — говорит R3F: этот материал должен прикрепиться к mesh как material.
            distort={0.5} — сила искажения (чем больше — тем волнистее).
            speed={2} — скорость «пульсации». */
              color="#DB8B9B"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
          {/* <meshStandardMaterial color="red"/> */}
          <ambientLight intensity={2} />
          <directionalLight position={[1, 2, 3]} />
          {/* <OrbitControls enableZoom={false} /> 
          Позволяет крутить камеру мышкой (вращать сцену).
Если включить, ты сможешь двигать сферу мышью. */}
        </mesh>
      </Canvas>
    </section>
  );
};

export default Test3d;
