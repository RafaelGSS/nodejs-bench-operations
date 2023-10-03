## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|713,139,277|95|
|using Array.includes (first item)|714,086,160|96|
|Using raw comparison|714,262,770|98|
|Using raw comparison (first item)|715,242,786|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:37 GMT+0000 (Coordinated Universal Time)
</details>

