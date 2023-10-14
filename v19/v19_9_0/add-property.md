## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|714,172,322|94|
|Using dot notation|687,574,079|94|
|Using define property (writable)|3,008,622|97|
|Using define property initialized (writable)|3,761,313|98|
|Using define property (getter)|1,615,549|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Directly in the object","hz":714172322.0451529,"cycles":7,"stats":{"deviation":2.3315437377476224e-11,"mean":1.400222284078906e-9,"moe":4.7134153454812945e-12,"rme":0.33661907820456327,"sem":2.404803747694538e-12,"variance":5.436096201030154e-22}},{"name":"Using dot notation","hz":687574078.8770059,"cycles":7,"stats":{"deviation":2.608619371479082e-10,"mean":1.4543887425675934e-9,"moe":5.273547468565739e-11,"rme":3.625954543113255,"sem":2.6905854431457852e-11,"variance":6.804895025255922e-20}},{"name":"Using define property (writable)","hz":3008621.759438919,"cycles":7,"stats":{"deviation":2.1914617815463904e-9,"mean":3.323781053110814e-7,"moe":4.3611809392228327e-10,"rme":0.13121143870596075,"sem":2.2250923159300166e-10,"variance":4.802504739978479e-18}},{"name":"Using define property initialized (writable)","hz":3761313.259650039,"cycles":6,"stats":{"deviation":3.376324933344465e-9,"mean":2.658645879692143e-7,"moe":6.68478231639985e-10,"rme":0.25143560364548856,"sem":3.4106032226529846e-10,"variance":1.1399570055523505e-17}},{"name":"Using define property (getter)","hz":1615548.6903899487,"cycles":8,"stats":{"deviation":4.0981279715287475e-8,"mean":6.18984748617281e-7,"moe":8.46682010814599e-9,"rme":1.3678560137482536,"sem":4.319806177625505e-9,"variance":1.6794652871026325e-15}}]}-->
