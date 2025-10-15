## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|101,619,447|50809728|
|~ (small)|99,741,226|49870620|
|Math.floor (long)|100,346,288|50173146|
|~ (long)|100,771,691|50397256|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:51:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":50809728,"opsSec":101619447.6672053},{"name":"~ (small)","samples":49870620,"opsSec":99741226.43519321},{"name":"Math.floor (long)","samples":50173146,"opsSec":100346288.78891876},{"name":"~ (long)","samples":50397256,"opsSec":100771691.0413034}]}-->
