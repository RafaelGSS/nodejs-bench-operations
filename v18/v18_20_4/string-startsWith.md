## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|99,494,159|49844125|
|(short string) (true) String#slice and strict comparison|50,139,718|25073800|
|(long string) (true) String#startsWith|53,101,592|26550810|
|(long string) (true) String#slice and strict comparison|44,462,104|22234701|
|(short string) (false) String#startsWith|102,658,299|51334373|
|(short string) (false) String#slice and strict comparison|59,805,888|29903622|
|(long string) (false) String#startsWith|89,578,361|44789646|
|(long string) (false) String#slice and strict comparison|51,848,806|25924559|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:57:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":99494159.18212733,"samples":49844125},{"name":"(short string) (true) String#slice and strict comparison","opsSec":50139718.03632469,"samples":25073800},{"name":"(long string) (true) String#startsWith","opsSec":53101592.068562575,"samples":26550810},{"name":"(long string) (true) String#slice and strict comparison","opsSec":44462104.345889494,"samples":22234701},{"name":"(short string) (false) String#startsWith","opsSec":102658299.08085233,"samples":51334373},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59805888.08090543,"samples":29903622},{"name":"(long string) (false) String#startsWith","opsSec":89578361.99744575,"samples":44789646},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51848806.69976457,"samples":25924559}]}-->
