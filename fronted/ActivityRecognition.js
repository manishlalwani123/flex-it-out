import * as poseDetection from '@tensorflow-models/pose-detection';
import { useEffect, useRef, useState } from 'react';

export default function ActivityRecognition() {
  const videoRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function runPoseDetection() {
      const model = poseDetection.SupportedModels.MoveNet;
      const detector = await poseDetection.createDetector(model);
      setInterval(async () => {
        const poses = await detector.estimatePoses(videoRef.current);
        if (poses.length > 0) {
          console.log(poses); // Process Pose Data
          setCount(prev => prev + 1);
        }
      }, 1000);
    }
    runPoseDetection();
  }, []);

  return (
    <div>
      <h2>AI Fitness Tracking</h2>
      <video ref={videoRef} autoPlay playsInline />
      <h3>Repetitions: {count}</h3>
    </div>
  );
}
