## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.016ms
new Array(length)|10|0.006ms
array.push|100|0.043ms
new Array(length)|100|0.017ms
array.push|1,000|0.084ms
new Array(length)|1,000|0.046ms
array.push|10,000|0.553ms
new Array(length)|10,000|3.688ms
array.push|1,000,000|44.396ms
new Array(length)|1,000,000|11.844ms
array.push|100,000,000|2,322.873ms
new Array(length)|100,000,000|5,640.65ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.022ms
array.push|100|0.114ms
new Array(length)|100|0.014ms
array.push|1,000|0.063ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.765ms
new Array(length)|10,000|0.339ms
array.push|1,000,000|442.888ms
new Array(length)|1,000,000|10.886ms
array.push|100,000,000|2,974.684ms
new Array(length)|100,000,000|7,029.463ms


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:52:00 GMT+0000 (Coordinated Universal Time)
</details>

