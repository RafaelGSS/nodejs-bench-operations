## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|152,276|53|
|[True conditional] Using constructor name|121,115|87|
|[True conditional] Check if property is valid then instanceof |119,631|88|
|[False conditional] Using instanceof only|765,612,200|88|
|[False conditional] Using constructor name|769,955,036|91|
|[False conditional] Check if property is valid then instanceof |767,503,512|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":152275.96789878982,"cycles":4,"stats":{"deviation":0.0000013076778562672077,"mean":0.000006567024421507205,"moe":3.5206180088814963e-7,"rme":5.3610551490434,"sem":1.7962336780007635e-7,"variance":1.7100213757715998e-12}},{"name":"[True conditional] Using constructor name","hz":121114.83506010505,"cycles":3,"stats":{"deviation":4.3137333094554874e-7,"mean":0.000008256626857508703,"moe":9.064622803908522e-8,"rme":1.0978602957774477,"sem":4.624807553014552e-8,"variance":1.8608295065105792e-13}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":119631.42934044593,"cycles":3,"stats":{"deviation":4.5244565413389634e-7,"mean":0.000008359007373841618,"moe":9.453250282186286e-8,"rme":1.1309058431709191,"sem":4.8230868786664725e-8,"variance":2.0470706994464936e-13}},{"name":"[False conditional] Using instanceof only","hz":765612199.5795503,"cycles":6,"stats":{"deviation":5.289607340226677e-11,"mean":1.3061442862968589e-9,"moe":1.1051931126926981e-11,"rme":0.8461493299688264,"sem":5.638740370881113e-12,"variance":2.7979945813779935e-21}},{"name":"[False conditional] Using constructor name","hz":769955035.8582311,"cycles":6,"stats":{"deviation":4.348120671110329e-11,"mean":1.2987771407785509e-9,"moe":8.933815176813693e-12,"rme":0.6878635984814396,"sem":4.558068967762089e-12,"variance":1.8906153370536933e-21}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":767503511.8090057,"cycles":6,"stats":{"deviation":5.3418335942421745e-11,"mean":1.3029256343635485e-9,"moe":1.0975535787986199e-11,"rme":0.8423762261264831,"sem":5.599763157135816e-12,"variance":2.8535186148574267e-21}}]}-->
