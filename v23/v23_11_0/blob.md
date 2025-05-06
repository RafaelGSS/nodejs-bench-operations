## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,633|2317|
|new Blob (1024)|573|290|
|text (128)|4,091|2054|
|text (1024)|518|260|
|arrayBuffer (128)|4,119|2060|
|arrayBuffer (1024)|507|255|
|slice (0, 64)|155,101|81268|
|slice (0, 512)|31,564|15784|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:14:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2317,"opsSec":4633.6519756674115},{"name":"new Blob (1024)","samples":290,"opsSec":573.0440701715781},{"name":"text (128)","samples":2054,"opsSec":4091.1134383495996},{"name":"text (1024)","samples":260,"opsSec":518.0610828328245},{"name":"arrayBuffer (128)","samples":2060,"opsSec":4119.86963908488},{"name":"arrayBuffer (1024)","samples":255,"opsSec":507.7632611978362},{"name":"slice (0, 64)","samples":81268,"opsSec":155101.18706361818},{"name":"slice (0, 512)","samples":15784,"opsSec":31564.41687052569}]}-->
