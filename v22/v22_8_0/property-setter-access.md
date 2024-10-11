## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|129,175,708|64597690|
|Setter|11,286,417|5643213|
|Method|91,866,108|45933077|
|DefineProperty (setter)|93,478,233|46739143|
|DefineProperty (setter & enumerable=false)|11,260,598|5630405|
|DefineProperty (setter & configurable=false)|11,250,294|5625152|
|DefineProperty (setter & enumerable=false & configurable=false)|11,354,682|5677620|
|DefineProperty (writable)|92,395,605|46200783|
|DefineProperty (writable & enumerable=false)|92,335,515|46169613|
|DefineProperty (writable & enumerable=false & configurable=false)|93,621,903|46810962|
|DefineProperties (setter)|90,814,348|45407197|
|DefineProperties (setter & enumerable=false)|11,338,278|5669634|
|DefineProperties (setter & enumerable=false & configurable=false)|10,950,400|5475421|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:45:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Setter (class)","opsSec":129175708.3480785,"samples":64597690},{"name":"Setter","opsSec":11286417.738342216,"samples":5643213},{"name":"Method","opsSec":91866108.61814234,"samples":45933077},{"name":"DefineProperty (setter)","opsSec":93478233.46523279,"samples":46739143},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11260598.007981902,"samples":5630405},{"name":"DefineProperty (setter & configurable=false)","opsSec":11250294.504751436,"samples":5625152},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11354682.893838497,"samples":5677620},{"name":"DefineProperty (writable)","opsSec":92395605.18992677,"samples":46200783},{"name":"DefineProperty (writable & enumerable=false)","opsSec":92335515.77430515,"samples":46169613},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":93621903.0286937,"samples":46810962},{"name":"DefineProperties (setter)","opsSec":90814348.0479399,"samples":45407197},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11338278.553783726,"samples":5669634},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10950400.260853477,"samples":5475421}]}-->
