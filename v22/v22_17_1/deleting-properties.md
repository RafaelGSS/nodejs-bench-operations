## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,090,867|2045983|
|Using delete property (proto: null)|16,899,458|8463657|
|Using delete property (cached proto: null)|4,089,168|2044585|
|Using undefined assignment|80,024,180|40042094|
|Using undefined assignment (proto: null)|18,347,798|9175144|
|Using undefined property (cached proto: null)|79,131,904|39772583|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:14:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2045983,"opsSec":4090867.847435035},{"name":"Using delete property (proto: null)","samples":8463657,"opsSec":16899458.41989299},{"name":"Using delete property (cached proto: null)","samples":2044585,"opsSec":4089168.274370988},{"name":"Using undefined assignment","samples":40042094,"opsSec":80024180.58779934},{"name":"Using undefined assignment (proto: null)","samples":9175144,"opsSec":18347798.864214882},{"name":"Using undefined property (cached proto: null)","samples":39772583,"opsSec":79131904.3773038}]}-->
