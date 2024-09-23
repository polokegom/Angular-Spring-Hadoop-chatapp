package com.chatapp.springchatapp.Repository;

import java.util.function.Function;

public class Repository<T> implements IRepository<T>{

    @Override
    public T FindEntity(Function<T, Boolean> src) {
        return null;
    }

    @Override
    public T getEntityID() {
        return null;
    }

    @Override
    public void updateEntity(T src) {

    }

    @Override
    public void setEntity(T src) {

    }

    @Override
    public void deleteEntity(Object ID) {

    }
}
