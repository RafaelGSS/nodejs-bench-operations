## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|711,585,320|97|
|Using dot notation|701,828,790|93|
|Using define property (writable)|2,904,241|95|
|Using define property initialized (writable)|3,699,499|97|
|Using define property (getter)|1,552,471|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Directly in the object","hz":711585319.6050496,"cycles":7,"stats":{"deviation":9.73133653752063e-12,"mean":1.4053128591172017e-9,"moe":1.936612346059264e-12,"rme":0.13780649152216662,"sem":9.880675234996245e-13,"variance":9.469891080648401e-23}},{"name":"Using dot notation","hz":701828790.2022735,"cycles":7,"stats":{"deviation":1.2134350497511362e-10,"mean":1.4248489289129772e-9,"moe":2.4662161213180877e-11,"rme":1.7308614768020167,"sem":1.2582735312847385e-11,"variance":1.4724246199645422e-20}},{"name":"Using define property (writable)","hz":2904240.9965737294,"cycles":6,"stats":{"deviation":1.9304595380462995e-9,"mean":3.443240423848253e-7,"moe":3.8819950033991484e-10,"rme":0.1127424903736618,"sem":1.9806096956118104e-10,"variance":3.726674028033932e-18}},{"name":"Using define property initialized (writable)","hz":3699499.499416033,"cycles":7,"stats":{"deviation":4.5734931979372166e-9,"mean":2.703068347915307e-7,"moe":9.10161040838888e-10,"rme":0.33671403149714413,"sem":4.643678779790245e-10,"variance":2.0916840031577986e-17}},{"name":"Using define property (getter)","hz":1552470.5724288577,"cycles":3,"stats":{"deviation":3.813976287284211e-8,"mean":6.441345927964926e-7,"moe":7.96879627080059e-9,"rme":1.237132170809874,"sem":4.065712383061526e-9,"variance":1.4546415119966251e-15}}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.003ms
array.push|100|0.038ms
new Array(length)|100|0.011ms
array.push|1,000|0.077ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.551ms
new Array(length)|10,000|0.293ms
array.push|1,000,000|39.341ms
new Array(length)|1,000,000|24.377ms
array.push|100,000,000|2,333.09ms
new Array(length)|100,000,000|5,700.097ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.023ms
array.push|100|0.019ms
new Array(length)|100|0.014ms
array.push|1,000|0.081ms
new Array(length)|1,000|0.045ms
array.push|10,000|0.772ms
new Array(length)|10,000|5.154ms
array.push|1,000,000|429.277ms
new Array(length)|1,000,000|5.4ms
array.push|100,000,000|3,191.383ms
new Array(length)|100,000,000|6,436.286ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|387|83|
|Array.from|15|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:32:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"new Array","hz":387.3666919375766,"cycles":3,"stats":{"deviation":0.00023610649817287215,"mean":0.0025815332624446402,"moe":0.000050795467899376874,"rme":1.9676472365602982,"sem":0.00002591605505070249,"variance":5.5746278479456486e-8}},{"name":"Array.from","hz":15.474386518001756,"cycles":1,"stats":{"deviation":0.001690360125859162,"mean":0.0646229172857143,"moe":0.0005112233309223275,"rme":0.7910867419712414,"sem":0.000260828230062412,"variance":0.0000028573173550946023}}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,379|87|
|new Blob (1024)|411|68|
|text (128)|29,294|62|
|text (1024)|21,095|80|
|arrayBuffer (128)|29,675|65|
|arrayBuffer (1024)|21,788|87|
|slice (0, 64)|62,991|77|
|slice (0, 512)|34,630|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:34:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Blob (128)","hz":3379.4802934033382,"cycles":3,"stats":{"deviation":0.000026454574349272245,"mean":0.00029590348609280997,"moe":0.000005559007029676022,"rme":1.878655470768074,"sem":0.000002836228076365317,"variance":6.99844504001173e-10}},{"name":"new Blob (1024)","hz":410.72012913110734,"cycles":2,"stats":{"deviation":0.0004152159877713554,"mean":0.002434747968441514,"moe":0.00009869057573681999,"rme":4.053420601065003,"sem":0.000050352334559602036,"variance":1.7240431650094235e-7}},{"name":"text (128)","hz":29293.60020903577,"cycles":4,"stats":{"deviation":0.0000028672216499818233,"mean":0.00003413714916787676,"moe":7.137095268233591e-7,"rme":2.090712154414357,"sem":3.641375136853873e-7,"variance":8.22095999012449e-12}},{"name":"text (1024)","hz":21094.801343228068,"cycles":4,"stats":{"deviation":0.0000018309657203248349,"mean":0.00004740504467092428,"moe":4.012280538815835e-7,"rme":0.8463826089962011,"sem":2.0470819075590995e-7,"variance":3.3524354690046418e-12}},{"name":"arrayBuffer (128)","hz":29674.747595303255,"cycles":5,"stats":{"deviation":0.000002707692095683197,"mean":0.000033698685954729875,"moe":6.582618260572315e-7,"rme":1.9533753539871763,"sem":3.35847870437363e-7,"variance":7.331596485025263e-12}},{"name":"arrayBuffer (1024)","hz":21788.22100412383,"cycles":4,"stats":{"deviation":0.000002208322705311177,"mean":0.00004589635839524169,"moe":4.6404380885288035e-7,"rme":1.011068906288195,"sem":2.3675704533310223e-7,"variance":4.876689170792874e-12}},{"name":"slice (0, 64)","hz":62990.868597119865,"cycles":4,"stats":{"deviation":0.0000036528438820661017,"mean":0.000015875316887529363,"moe":8.159091812539367e-7,"rme":5.139482802355038,"sem":4.1628019451731466e-7,"variance":1.3343268426747748e-11}},{"name":"slice (0, 512)","hz":34629.90971243806,"cycles":4,"stats":{"deviation":0.000012396345640646026,"mean":0.000028876771793627552,"moe":0.000002768881602593844,"rme":9.58861199022556,"sem":0.000001412694695200941,"variance":1.5366938524236374e-10}}]}-->
