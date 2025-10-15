## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,033|2019|
|new Blob (1024)|524|264|
|text (128)|47,144|23584|
|text (1024)|28,121|14070|
|arrayBuffer (128)|46,590|23296|
|arrayBuffer (1024)|32,584|16293|
|slice (0, 64)|89,004|46780|
|slice (0, 512)|51,607|26288|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:03:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2019,"opsSec":4033.5878760361493},{"name":"new Blob (1024)","samples":264,"opsSec":524.7235297312287},{"name":"text (128)","samples":23584,"opsSec":47144.42184887841},{"name":"text (1024)","samples":14070,"opsSec":28121.33598179423},{"name":"arrayBuffer (128)","samples":23296,"opsSec":46590.28557067157},{"name":"arrayBuffer (1024)","samples":16293,"opsSec":32584.712578006045},{"name":"slice (0, 64)","samples":46780,"opsSec":89004.64896700582},{"name":"slice (0, 512)","samples":26288,"opsSec":51607.505376408386}]}-->
