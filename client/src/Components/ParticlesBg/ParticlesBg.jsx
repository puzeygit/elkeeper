import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particesConfig from '../config/particlesjs-config.json';

function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Particles init={particlesInit} loaded={particlesLoaded} params={particesConfig} />
  );
}

export default ParticlesBg;
