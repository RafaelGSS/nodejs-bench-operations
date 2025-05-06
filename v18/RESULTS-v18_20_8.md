## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|75,747,234|37883686|
|Using dot notation|64,996,035|32522072|
|Using define property (writable)|3,876,713|1938358|
|Using define property initialized (writable)|5,527,575|2763789|
|Using define property (getter)|2,040,130|1027033|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:58:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":37883686,"opsSec":75747234.14331959},{"name":"Using dot notation","samples":32522072,"opsSec":64996035.10474411},{"name":"Using define property (writable)","samples":1938358,"opsSec":3876713.3328212267},{"name":"Using define property initialized (writable)","samples":2763789,"opsSec":5527575.866355716},{"name":"Using define property (getter)","samples":1027033,"opsSec":2040130.6225655847}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.003ms
array.push|100|0.033ms
new Array(length)|100|0.01ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.4ms
new Array(length)|10,000|0.14ms
array.push|1,000,000|29.325ms
new Array(length)|1,000,000|9.48ms
array.push|100,000,000|2,074.637ms
new Array(length)|100,000,000|4,423.069ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.019ms
array.push|100|0.014ms
new Array(length)|100|0.01ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.469ms
new Array(length)|10,000|3.366ms
array.push|1,000,000|281.483ms
new Array(length)|1,000,000|5.237ms
array.push|100,000,000|2,453.348ms
new Array(length)|100,000,000|4,794.319ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|225|113|
|Array.from|20|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:08:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":113,"opsSec":225.65363971532813},{"name":"Array.from","samples":11,"opsSec":20.81900043728039}]}-->
