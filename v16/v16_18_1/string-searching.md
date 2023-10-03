## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|13,344,894|94|
|Using indexof|715,162,732|99|
|Using RegExp.test|12,151,596|93|
|Using RegExp.text with cached regex pattern|12,992,900|96|
|Using new RegExp.test|3,338,541|89|
|Using new RegExp.test with cached regex pattern|3,917,515|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:05:26 GMT+0000 (Coordinated Universal Time)
</details>

