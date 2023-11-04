## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,497|94|
|new Blob (1024)|685|77|
|text (128)|5,869|86|
|text (1024)|750|89|
|arrayBuffer (128)|5,882|88|
|arrayBuffer (1024)|748|87|
|slice (0, 64)|199,445|56|
|slice (0, 512)|24,811|54|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:06:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"new Blob (128)","opsSec":5497.432550594937,"samples":4},{"name":"new Blob (1024)","opsSec":684.9151095843624,"samples":2},{"name":"text (128)","opsSec":5868.597805609598,"samples":4},{"name":"text (1024)","opsSec":749.8718519558171,"samples":2},{"name":"arrayBuffer (128)","opsSec":5881.785178289786,"samples":4},{"name":"arrayBuffer (1024)","opsSec":748.1073239410351,"samples":2},{"name":"slice (0, 64)","opsSec":199444.78399374164,"samples":4},{"name":"slice (0, 512)","opsSec":24811.368970799474,"samples":3}]}-->
