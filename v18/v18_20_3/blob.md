## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,046|2547|
|new Blob (1024)|689|345|
|text (128)|40,030|20016|
|text (1024)|26,403|13203|
|arrayBuffer (128)|44,850|22426|
|arrayBuffer (1024)|27,978|13990|
|slice (0, 64)|99,572|49787|
|slice (0, 512)|51,589|25795|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:53:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5046.72604536095,"samples":2547},{"name":"new Blob (1024)","opsSec":689.3575642467631,"samples":345},{"name":"text (128)","opsSec":40030.81805042398,"samples":20016},{"name":"text (1024)","opsSec":26403.332049010543,"samples":13203},{"name":"arrayBuffer (128)","opsSec":44850.423686743714,"samples":22426},{"name":"arrayBuffer (1024)","opsSec":27978.732227972672,"samples":13990},{"name":"slice (0, 64)","opsSec":99572.35705597838,"samples":49787},{"name":"slice (0, 512)","opsSec":51589.762480270256,"samples":25795}]}-->
