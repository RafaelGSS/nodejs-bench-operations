## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|595,575,685|93|
|Using indexof|596,685,496|96|
|Using RegExp.test|11,801,847|92|
|Using RegExp.text with cached regex pattern|12,280,000|93|
|Using new RegExp.test|3,258,552|93|
|Using new RegExp.test with cached regex pattern|3,703,667|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:05:14 GMT+0000 (Coordinated Universal Time)
</details>

