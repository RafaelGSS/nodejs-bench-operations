## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|801,858,548|87|
|Using indexof|811,411,315|86|
|Using RegExp.test|10,599,115|85|
|Using RegExp.text with cached regex pattern|11,319,084|86|
|Using new RegExp.test|2,481,284|88|
|Using new RegExp.test with cached regex pattern|3,088,032|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:05:17 GMT+0000 (Coordinated Universal Time)
</details>

