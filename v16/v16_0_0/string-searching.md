## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|12,889,016|99|
|Using indexof|708,315,912|95|
|Using RegExp.test|11,879,947|97|
|Using RegExp.text with cached regex pattern|12,620,089|96|
|Using new RegExp.test|3,103,655|98|
|Using new RegExp.test with cached regex pattern|3,722,803|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:08:57 GMT+0000 (Coordinated Universal Time)
</details>

