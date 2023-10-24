## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,229|85|
|new Blob (1024)|401|69|
|text (128)|26,224|66|
|text (1024)|17,298|84|
|arrayBuffer (128)|31,782|87|
|arrayBuffer (1024)|20,560|88|
|slice (0, 64)|67,499|80|
|slice (0, 512)|33,483|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3229.110149495295,"samples":5},{"name":"new Blob (1024)","opsSec":400.8814510570506,"samples":2},{"name":"text (128)","opsSec":26223.83963959234,"samples":4},{"name":"text (1024)","opsSec":17298.30066086861,"samples":3},{"name":"arrayBuffer (128)","opsSec":31781.719329819298,"samples":4},{"name":"arrayBuffer (1024)","opsSec":20559.555839168806,"samples":4},{"name":"slice (0, 64)","opsSec":67499.38281966902,"samples":3},{"name":"slice (0, 512)","opsSec":33482.720960943305,"samples":3}]}-->
