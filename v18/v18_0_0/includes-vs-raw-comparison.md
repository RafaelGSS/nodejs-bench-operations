## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|86,448,828|94|
|using Array.includes (first item)|92,404,527|94|
|Using raw comparison|593,513,469|96|
|Using raw comparison (first item)|593,023,828|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:36 GMT+0000 (Coordinated Universal Time)
</details>

