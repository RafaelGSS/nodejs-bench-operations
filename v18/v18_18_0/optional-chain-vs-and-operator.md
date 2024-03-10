## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|818,659,393|99|
|Using optional chain (obj.field?.field2) (undefined)|820,505,661|90|
|Using and operator (obj.field && obj.field.field2) (Valid)|822,518,243|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|821,795,564|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606483459472656},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":818659392.5005045,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":820505661.0956755,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":822518243.0439272,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":821795564.274915,"samples":7}]}-->
