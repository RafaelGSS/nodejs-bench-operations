## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|598,153,230|93|
|Using indexof|605,490,917|94|
|Using RegExp.test|10,343,577|94|
|Using RegExp.text with cached regex pattern|10,822,924|92|
|Using new RegExp.test|2,616,198|95|
|Using new RegExp.test with cached regex pattern|2,951,386|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:05:14 GMT+0000 (Coordinated Universal Time)
</details>

