## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|335,096|167549|
|[True conditional] Using constructor name|336,930|168466|
|[True conditional] Check if property is valid then instanceof |342,239|171120|
|[False conditional] Using instanceof only|16,174,550|8087276|
|[False conditional] Using constructor name|16,207,703|8103852|
|[False conditional] Check if property is valid then instanceof |16,225,057|8112529|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:56:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":335096.7869496035,"samples":167549},{"name":"[True conditional] Using constructor name","opsSec":336930.21898695634,"samples":168466},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":342239.9883638607,"samples":171120},{"name":"[False conditional] Using instanceof only","opsSec":16174550.285545165,"samples":8087276},{"name":"[False conditional] Using constructor name","opsSec":16207703.48136761,"samples":8103852},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16225057.967557132,"samples":8112529}]}-->
