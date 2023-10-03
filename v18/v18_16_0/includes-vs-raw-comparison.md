## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|590,504,806|97|
|using Array.includes (first item)|593,064,816|94|
|Using raw comparison|593,791,910|96|
|Using raw comparison (first item)|592,642,793|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:39 GMT+0000 (Coordinated Universal Time)
</details>

