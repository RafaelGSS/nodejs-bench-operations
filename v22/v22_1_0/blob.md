## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,909|2955|
|new Blob (1024)|785|393|
|text (128)|6,439|3220|
|text (1024)|817|410|
|arrayBuffer (128)|6,485|3243|
|arrayBuffer (1024)|813|407|
|slice (0, 64)|253,505|126753|
|slice (0, 512)|36,898|18450|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:25:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5909.867737160042,"samples":2955},{"name":"new Blob (1024)","opsSec":785.3151470784278,"samples":393},{"name":"text (128)","opsSec":6439.215111191788,"samples":3220},{"name":"text (1024)","opsSec":817.2789856708293,"samples":410},{"name":"arrayBuffer (128)","opsSec":6485.072751327827,"samples":3243},{"name":"arrayBuffer (1024)","opsSec":813.6713890454824,"samples":407},{"name":"slice (0, 64)","opsSec":253505.06456640433,"samples":126753},{"name":"slice (0, 512)","opsSec":36898.59696774274,"samples":18450}]}-->
