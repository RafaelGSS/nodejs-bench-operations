## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|712,291,725|93|
|Using dot notation|712,421,897|96|
|Using define property (writable)|3,159,074|94|
|Using define property initialized (writable)|4,125,637|89|
|Using define property (getter)|1,646,633|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Directly in the object","hz":712291725.4103355,"cycles":7,"stats":{"deviation":4.323871129853061e-11,"mean":1.403919158858573e-9,"moe":8.787945171958297e-12,"rme":0.6259580629345604,"sem":4.48364549589709e-12,"variance":1.869586154757679e-21}},{"name":"Using dot notation","hz":712421896.5168866,"cycles":6,"stats":{"deviation":3.200234123472622e-11,"mean":1.4036626399176052e-9,"moe":6.401801538959904e-12,"rme":0.4560783593510538,"sem":3.2662252749795426e-12,"variance":1.0241498445038579e-21}},{"name":"Using define property (writable)","hz":3159073.691577493,"cycles":5,"stats":{"deviation":3.2557524802479167e-9,"mean":3.1654848782607754e-7,"moe":6.581782470147429e-10,"rme":0.2079233584512867,"sem":3.3580522806874637e-10,"variance":1.059992421264046e-17}},{"name":"Using define property initialized (writable)","hz":4125637.4600812034,"cycles":6,"stats":{"deviation":5.0708194272365304e-9,"mean":2.423867849940255e-7,"moe":1.0535113371820943e-9,"rme":0.43464058372986875,"sem":5.375057842765787e-10,"variance":2.5713209663639418e-17}},{"name":"Using define property (getter)","hz":1646632.5449403194,"cycles":4,"stats":{"deviation":4.829584922928987e-8,"mean":6.073000336794898e-7,"moe":1.0090775459633413e-8,"rme":1.6615799275517489,"sem":5.148354826343578e-9,"variance":2.332489052778299e-15}}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.018ms
new Array(length)|10|0.003ms
array.push|100|0.034ms
new Array(length)|100|0.011ms
array.push|1,000|0.073ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.519ms
new Array(length)|10,000|0.518ms
array.push|1,000,000|36.976ms
new Array(length)|1,000,000|7.133ms
array.push|100,000,000|1,749.741ms
new Array(length)|100,000,000|5,380.036ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.019ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.368ms
new Array(length)|10,000|0.246ms
array.push|1,000,000|35.858ms
new Array(length)|1,000,000|4.413ms
array.push|100,000,000|3,178.436ms
new Array(length)|100,000,000|5,001.738ms
