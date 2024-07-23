<?php

// final class Dictionary는 더 이상 필요하지 않습니다.

// 해당 테스트는 표준 클래스를 사용합니다.
// PHP에서는 연관 배열을 사용합니다.
// 자바와 다른 언어에서는 해시 테이블, 딕셔너리 등을 사용합니다.

final class DictionaryTest extends TestCase {
    public function test01EmptyDictionaryHasNoWords() {
        $dictionary = [];
        $this->assertEquals(0, count($dictionary));
    }

    public function test02SingleDictionaryReturns1AsCount() {
        $dictionary = ['happy']; 
        $this->assertEquals(1, count($dictionary));
    }

    public function test03DictionaryDoesNotIncludeWord() {
        $dictionary = ['happy']; 
        $this->assertFalse(in_array('sadly', $dictionary));
    }

    public function test04DictionaryIncludesWord() {
        $dictionary = ['happy'];  
        $this->assertTrue(in_array('happy', $dictionary));
    }
} 
