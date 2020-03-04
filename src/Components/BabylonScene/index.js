import React, { useEffect, useState } from "react";
import * as BABYLON from "babylonjs";

var canvas = null;

const BabylonScene = props => {
  const canvasLoader = canvasRef => {
    canvas = canvasRef;
  };

  useEffect(() => {
    const engine = new BABYLON.Engine(canvas, true);
    var scene = new BABYLON.Scene(engine);

    scene.clearColor = new BABYLON.Color3(1.0, 1.0, 1.0);

    var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      Math.PI / 2,
      Math.PI / 2,
      2,
      BABYLON.Vector3.Zero(),
      scene
    );

    var light = new BABYLON.HemisphericLight(
      "light1",
      new BABYLON.Vector3(0, 0, 1),
      scene
    );

    light.intensity = 0.7;

    // var light2 = new BABYLON.PointLight(
    //   "light2",
    //   new BABYLON.Vector3(0, 1, -1),
    //   scene
    // );

    var sphere = BABYLON.MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 1 },
      scene
    );

    engine.runRenderLoop(function() {
      scene.render();
    });
  }, []);

  return <canvas ref={canvasLoader} width="500px" height="300px" />;
};

export default BabylonScene;
