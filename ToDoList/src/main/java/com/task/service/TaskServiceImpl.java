package com.task.service;

import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.task.dao.TaskDao;

@Service
public class TaskServiceImpl implements TaskService {

	@Inject
	TaskDao taskDao;
	
	@Override
	public List<Map<String, Object>> select(Map<String, Object> paramMap) throws Exception {
		return taskDao.select(paramMap);
	}

	@Override
	public int insert(Map<String, Object> paramMap) throws Exception {
		return taskDao.insert(paramMap);
	}

	@Override
	public int update(Map<String, Object> paramMap) throws Exception {
		return taskDao.update(paramMap);
	}

	@Override
	public int delete(Map<String, Object> paramMap) throws Exception {
		return taskDao.delete(paramMap);
	}

}
