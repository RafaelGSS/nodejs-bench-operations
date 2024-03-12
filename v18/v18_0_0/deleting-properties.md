## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,449,805|94|
|Using delete property (proto: null)|20,313,996|95|
|Using delete property (cached proto: null)|3,514,100|96|
|Using undefined assignment|822,055,989|98|
|Using undefined assignment (proto: null)|23,078,859|93|
|Using undefined property (cached proto: null)|818,209,675|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3449804.6657945723,"samples":4},{"name":"Using delete property (proto: null)","opsSec":20313996.472139418,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":3514100.299826752,"samples":5},{"name":"Using undefined assignment","opsSec":822055989.0804781,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":23078858.77058573,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":818209675.0214931,"samples":7}]}-->
