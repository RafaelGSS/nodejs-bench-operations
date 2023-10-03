## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,118,998|95|
|using Array.includes (first item)|702,194,795|97|
|Using raw comparison|713,539,361|97|
|Using raw comparison (first item)|715,784,418|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:13:35 GMT+0000 (Coordinated Universal Time)
</details>

