## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,396,457|88|
|Using delete property (proto: null)|11,233,279|97|
|Using delete property (cached proto: null)|2,470,868|96|
|Using undefined assignment|712,099,427|98|
|Using undefined assignment (proto: null)|13,619,476|94|
|Using undefined property (cached proto: null)|708,887,879|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using delete property","hz":2396456.660846675,"cycles":4,"stats":{"deviation":2.3350446346076192e-8,"mean":4.1728273927837163e-7,"moe":4.878765250442556e-9,"rme":1.169174948113036,"sem":2.489165944103345e-9,"variance":5.452433445609831e-16}},{"name":"Using delete property (proto: null)","hz":11233279.420105074,"cycles":6,"stats":{"deviation":8.986986226202532e-10,"mean":8.902119876144292e-8,"moe":1.7884807921731456e-10,"rme":0.20090504475971815,"sem":9.124902000883396e-11,"variance":8.076592142995402e-19}},{"name":"Using delete property (cached proto: null)","hz":2470867.5752339694,"cycles":5,"stats":{"deviation":6.8637727912455735e-9,"mean":4.047161450590118e-7,"moe":1.3730405189976075e-9,"rme":0.339260129787361,"sem":7.005308770395957e-10,"variance":4.7111376929843054e-17}},{"name":"Using undefined assignment","hz":712099427.2032688,"cycles":9,"stats":{"deviation":1.1258340200059418e-11,"mean":1.4042982788617664e-9,"moe":2.2290376361027956e-12,"rme":0.1587296423883329,"sem":1.1372641000524467e-12,"variance":1.2675022406027393e-22}},{"name":"Using undefined assignment (proto: null)","hz":13619476.298645109,"cycles":5,"stats":{"deviation":1.747032838882414e-9,"mean":7.342426228969479e-8,"moe":3.531776504352869e-10,"rme":0.4810094639314557,"sem":1.8019267879351372e-10,"variance":3.052123740133547e-18}},{"name":"Using undefined property (cached proto: null)","hz":708887879.3590862,"cycles":7,"stats":{"deviation":2.3457131452880055e-11,"mean":1.4106603161336484e-9,"moe":4.692403569263953e-12,"rme":0.332638801531253,"sem":2.3940834537060985e-12,"variance":5.502370159976948e-22}}]}-->
