uniform float uTime;
attribute vec3 uStep;
uniform float uSize;

void main()
{
  
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  modelPosition.xyz += uStep * uTime;
 
  vec4 viewPosition = viewMatrix * modelPosition;

  vec4 projectionPosition = projectionMatrix * viewPosition;

  gl_Position =  projectionPosition;
  gl_PointSize = uSize;
}