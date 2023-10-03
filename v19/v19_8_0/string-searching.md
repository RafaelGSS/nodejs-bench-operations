## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|594,928,009|97|
|Using indexof|594,484,221|97|
|Using RegExp.test|11,746,412|98|
|Using RegExp.text with cached regex pattern|12,192,337|97|
|Using new RegExp.test|3,210,672|98|
|Using new RegExp.test with cached regex pattern|3,685,809|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:05:10 GMT+0000 (Coordinated Universal Time)
</details>

