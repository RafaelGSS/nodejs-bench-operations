## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,256,232|1628117|
|Using delete property (proto: null)|8,959,913|4479957|
|Using delete property (cached proto: null)|3,119,534|1559768|
|Using undefined assignment|15,407,776|7703889|
|Using undefined assignment (proto: null)|9,495,478|4747740|
|Using undefined property (cached proto: null)|15,291,161|7645581|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:53:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3256232.39142106,"samples":1628117},{"name":"Using delete property (proto: null)","opsSec":8959913.838707015,"samples":4479957},{"name":"Using delete property (cached proto: null)","opsSec":3119534.309211951,"samples":1559768},{"name":"Using undefined assignment","opsSec":15407776.243527684,"samples":7703889},{"name":"Using undefined assignment (proto: null)","opsSec":9495478.613662416,"samples":4747740},{"name":"Using undefined property (cached proto: null)","opsSec":15291161.938829437,"samples":7645581}]}-->
