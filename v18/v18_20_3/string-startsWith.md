## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|99,384,883|49771885|
|(short string) (true) String#slice and strict comparison|50,071,544|25035797|
|(long string) (true) String#startsWith|55,124,512|27566824|
|(long string) (true) String#slice and strict comparison|43,976,612|21991887|
|(short string) (false) String#startsWith|100,348,590|50174309|
|(short string) (false) String#slice and strict comparison|59,290,077|29645039|
|(long string) (false) String#startsWith|89,580,324|44856966|
|(long string) (false) String#slice and strict comparison|51,369,097|25684559|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:58:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":99384883.18847683,"samples":49771885},{"name":"(short string) (true) String#slice and strict comparison","opsSec":50071544.529314004,"samples":25035797},{"name":"(long string) (true) String#startsWith","opsSec":55124512.765744455,"samples":27566824},{"name":"(long string) (true) String#slice and strict comparison","opsSec":43976612.49660815,"samples":21991887},{"name":"(short string) (false) String#startsWith","opsSec":100348590.30378908,"samples":50174309},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59290077.05135877,"samples":29645039},{"name":"(long string) (false) String#startsWith","opsSec":89580324.20057938,"samples":44856966},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51369097.24688472,"samples":25684559}]}-->
