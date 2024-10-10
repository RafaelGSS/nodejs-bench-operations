## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,955,857|1979102|
|Using delete property (proto: null)|15,675,905|7838188|
|Using delete property (cached proto: null)|3,906,810|1953579|
|Using undefined assignment|71,847,374|35923692|
|Using undefined assignment (proto: null)|17,641,294|8820650|
|Using undefined property (cached proto: null)|71,970,639|35985325|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:16:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":3955857.583074599,"samples":1979102},{"name":"Using delete property (proto: null)","opsSec":15675905.064460056,"samples":7838188},{"name":"Using delete property (cached proto: null)","opsSec":3906810.9892343143,"samples":1953579},{"name":"Using undefined assignment","opsSec":71847374.80353603,"samples":35923692},{"name":"Using undefined assignment (proto: null)","opsSec":17641294.00196004,"samples":8820650},{"name":"Using undefined property (cached proto: null)","opsSec":71970639.06046286,"samples":35985325}]}-->
