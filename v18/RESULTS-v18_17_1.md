## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|709,415,419|98|
|Using dot notation|692,099,009|95|
|Using define property (writable)|2,895,914|97|
|Using define property initialized (writable)|3,757,907|94|
|Using define property (getter)|1,467,545|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Directly in the object","hz":709415418.5290136,"cycles":6,"stats":{"deviation":1.4221881236257237e-11,"mean":1.4096113135989052e-9,"moe":2.8157888257484193e-12,"rme":0.1997564008307635,"sem":1.436626951912459e-12,"variance":2.0226190589820568e-22}},{"name":"Using dot notation","hz":692099008.5991714,"cycles":8,"stats":{"deviation":1.750311486220987e-10,"mean":1.444879977539672e-9,"moe":3.519732120766702e-11,"rme":2.436003111317293,"sem":1.7957816942687255e-11,"variance":3.0635902987971205e-20}},{"name":"Using define property (writable)","hz":2895913.7449732716,"cycles":6,"stats":{"deviation":1.2487502046104143e-9,"mean":3.4531415230712603e-7,"moe":2.4851109136635725e-10,"rme":0.07196666852661425,"sem":1.2679137314610064e-10,"variance":1.5593770735145517e-18}},{"name":"Using define property initialized (writable)","hz":3757907.362115976,"cycles":5,"stats":{"deviation":3.5149234504359357e-9,"mean":2.6610554855107634e-7,"moe":7.105718782475665e-10,"rme":0.2670263292579107,"sem":3.625366725752891e-10,"variance":1.2354686862424464e-17}},{"name":"Using define property (getter)","hz":1467544.8155282142,"cycles":4,"stats":{"deviation":5.327223640637791e-8,"mean":6.814101957357053e-7,"moe":1.1194311152383536e-8,"rme":1.6428153295090127,"sem":5.711383241012008e-9,"variance":2.8379311717370162e-15}}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.003ms
array.push|100|0.039ms
new Array(length)|100|0.012ms
array.push|1,000|0.077ms
new Array(length)|1,000|0.039ms
array.push|10,000|0.558ms
new Array(length)|10,000|0.29ms
array.push|1,000,000|52.22ms
new Array(length)|1,000,000|11.807ms
array.push|100,000,000|2,252.955ms
new Array(length)|100,000,000|5,399.832ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.02ms
array.push|100|0.021ms
new Array(length)|100|0.014ms
array.push|1,000|0.079ms
new Array(length)|1,000|0.044ms
array.push|10,000|0.886ms
new Array(length)|10,000|5.144ms
array.push|1,000,000|385.784ms
new Array(length)|1,000,000|5.162ms
array.push|100,000,000|3,180.148ms
new Array(length)|100,000,000|6,430.024ms
