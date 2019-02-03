package com.task.dao;

import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

@Repository
public class TaskDaoImpl implements TaskDao {
	
	@Inject
	private SqlSession session;

	private static String namespace = "com.task.mapper.TaskMapper";

	public List<Map<String, Object>> select(Map<String, Object> paramMap) throws Exception {
		return session.selectList(namespace + ".select", paramMap);
	}

	public int insert(Map<String, Object> paramMap) throws Exception {
		return session.insert(namespace + ".insert", paramMap);
	}

	public int update(Map<String, Object> paramMap) throws Exception {
		return session.update(namespace + ".update", paramMap);
	}
	
	public int delete(Map<String, Object> paramMap) throws Exception {
		return session.delete(namespace + ".delete", paramMap);
	}
	
}
